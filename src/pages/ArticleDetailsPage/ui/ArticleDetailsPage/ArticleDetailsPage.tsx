import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {memo, useCallback} from 'react';
import cls from './ArticleDetailsPage.module.scss';
import {useNavigate, useParams} from "react-router-dom";
import {ArticleDetails, ArticleList} from "entities/Article";
import {CommentList} from "entities/Comment";
import {Text, TextSize} from 'shared/ui/Text/Text';
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsCommentsReducer, getArticleComments} from "../../model/slices/articleDetailsCommentsSlice";
import {useDispatch, useSelector} from "react-redux";
import {getArticleCommentsIsLoading} from "../../model/selectors/comments";
import {
    fetchCommentsByArticleId
} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {useInitialEffect} from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import {AddCommentForm} from "features/addCommentForm";
import {addCommentForArticle} from "../../model/services/addCommentForArticle/addCommentForArticle";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import {Page} from "widgets/Page/Page";
import {articleDetailsPageReducer} from "pages/ArticleDetailsPage/model/slices";
import {getArticleRecommendations} from "pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice";
import {
    fetchArticleRecommendations
} from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations";
import {getArticleRecommendationsIsLoading} from "../../model/selectors/recommendations";
import {ArticleDetailsPageHeader} from "pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader";

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const navigate = useNavigate();

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Статья не найдена')}
            </Page>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Рекомендуем')}
                />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text
                    size={TextSize.L}
                    className={cls.commentTitle}
                    title={t('Комментарии')}
                />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticleDetailsPage);
