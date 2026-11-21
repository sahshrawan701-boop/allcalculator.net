/**
 * Article structured data component.
 *
 * Server component for injecting Article JSON-LD schema.
 * Ready for use when article/blog pages are added.
 */

import { generateArticleSchema, type ArticleData } from '@/lib/seo/schemas';
import { JsonLd } from './JsonLd';

interface ArticleSchemaProps {
  article: ArticleData;
}

export function ArticleSchema({ article }: ArticleSchemaProps) {
  const schema = generateArticleSchema(article);
  return <JsonLd data={schema} />;
}
