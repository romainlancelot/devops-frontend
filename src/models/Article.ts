interface ArticleParams {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
}

export default class Article {
  public id: number;
  public title: string;
  public subtitle: string;
  public summary: string;

  constructor({ id, title, subtitle, summary }: ArticleParams) {
    this.id = id;
    this.title = title;
    this.subtitle = subtitle;
    this.summary = summary;
  }
}
