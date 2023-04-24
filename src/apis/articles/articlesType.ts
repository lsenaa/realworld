export interface IPostArticle {
  title: string;
  description: string;
  body: string;
  tagList: string[];
}

export interface IPutArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
}
