import { HTMLAttributeAnchorTarget, memo } from 'react';
import { Article } from 'entities/Article';
import { ToggleFeatures } from 'shared/lib/features';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';
import { ArticleView } from 'entities/Article/model/types/article';

export interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ArticleListItemRedesigned {...props} />}
            off={<ArticleListItemDeprecated {...props} />}
        />
    );
});
