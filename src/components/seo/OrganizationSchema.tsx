/**
 * Organization + WebSite schema component.
 *
 * Server component — injected once in root layout.
 * Provides Organization identity and WebSite SearchAction to Google.
 */

import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo/schemas';
import { JsonLd } from './JsonLd';

export function OrganizationSchema() {
  const orgSchema = generateOrganizationSchema();
  const siteSchema = generateWebSiteSchema();

  return (
    <>
      <JsonLd data={orgSchema} />
      <JsonLd data={siteSchema} />
    </>
  );
}
