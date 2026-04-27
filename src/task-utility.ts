type Post = {
  id: number;
  title: string;
  body: string;
  published: boolean;
};

// 編集中（全部オプション）
type DraftPost = Partial<Post>;

// 一覧用（必要なものだけ）
type PostListItem = Pick<Post, "id" | "title">;

// 公開済み（変更禁止）
type PublishedPost = Readonly<Post>;