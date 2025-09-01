import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from 'widgets/Page/ui/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
import { ArticleInfiniteList } from 'pages/ArticlesPage/ui/ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageGreeting } from 'features/articlePageGreeting';
import { ToggleFeatures } from 'shared/lib/features';
import { StickyContentLayout } from 'shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from 'pages/ArticlesPage/ui/ViewSelectorContainer/ViewSelectorContainer';
import { FiltersContainer } from 'pages/ArticlesPage/ui/FiltersContainer/FiltersContainer';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    right={<FiltersContainer />}
                    content={
                        <Page
                            data-testid="ArticlesPage"
                            onScrollEnd={onLoadNextPart}
                            className={classNames(
                                cls.ArticlesPageRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <ArticleInfiniteList className={cls.list} />
                            <ArticlePageGreeting />
                        </Page>
                    }
                />
            }
            off={
                <Page
                    data-testid="ArticlesPage"
                    onScrollEnd={onLoadNextPart}
                    className={classNames(cls.ArticlesPage, {}, [className])}
                >
                    <ArticlesPageFilters />
                    <ArticleInfiniteList className={cls.list} />
                    <ArticlePageGreeting />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
