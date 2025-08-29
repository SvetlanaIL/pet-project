import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, ButtonTheme } from 'shared/ui/deprecated/Button/Button';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { getCanEditArticle } from '../../model/selectors/article';
import cls from './ArticleDetailsPageHeader.module.scss';
import { getRouteArticleDetails, getRouteArticles } from 'shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const { t } = useTranslation();
        const navigate = useNavigate();
        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);

        const onBackToList = useCallback(() => {
            navigate(getRouteArticles());
        }, [navigate]);

        const onEditArticle = useCallback(() => {
            if (article) {
                navigate(getRouteArticleDetails(article.id));
            }
        }, [article, navigate]);

        return (
            <div
                className={classNames(cls.ArticleDetailsPageHeader, {}, [
                    className,
                ])}
            >
                <Button theme={ButtonTheme.OUTLINED} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.OUTLINED}
                        onClick={onEditArticle}
                    >
                        {t('Редактировать')}
                    </Button>
                )}
            </div>
        );
    },
);
