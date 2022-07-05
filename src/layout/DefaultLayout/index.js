import { Page, Layout } from "@shopify/polaris";

export default function DefaultLayout({ children }) {
  return (
    <div className="frame">
      <Page fullWidth>
        <Layout>
          <Layout.Section>{children}</Layout.Section>
        </Layout>
      </Page>
    </div>
  );
}
