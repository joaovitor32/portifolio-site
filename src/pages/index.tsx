/* eslint-disable no-restricted-syntax */
import Head from 'next/head';

import { fetchRepositories } from 'settings/infra/services/github';
import { RepositoryInfoResponse } from 'settings/infra/types';

import * as Templates from 'templates';

interface IndexProps {
  repositories: Array<RepositoryInfoResponse>;
}

const Index = ({ repositories }: IndexProps) => (
  <>
    <Head>
      <title>Inicío</title>
    </Head>

    <Templates.Banner />
    <Templates.Repositories repositories={repositories} />
    <Templates.Contact />
  </>
);

export async function getServerSideProps() {
  try {
    const repositories = await fetchRepositories();

    return {
      props: { repositories },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
}

export default Index;
