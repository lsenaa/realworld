export interface IPostArticle {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}

export interface IPutArticle {
  title: string;
  description: string;
  body: string;
}
