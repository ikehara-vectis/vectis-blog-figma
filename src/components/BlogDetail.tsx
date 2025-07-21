import type { BlogPost } from '../types/blog';
import { mockBlogPosts } from '../data/mockData';

export default function BlogDetail() {
  // 実際の実装では useParams などでIDを取得
  const post: BlogPost = mockBlogPosts[0];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <article className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
        <div className="space-y-6">
          {/* ヘッダー部分 */}
          <header className="space-y-4">
            <div className="flex gap-4 text-sm text-gray-500 mb-3">
              <div>投稿日: {formatDate(post.publishedAt)}</div>
              {post.publishedAt !== post.updatedAt && (
                <div>更新日: {formatDate(post.updatedAt)}</div>
              )}
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              {post.title}
            </h1>
          </header>
          
          {/* 記事本文 */}
          <div className="prose max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-4">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
        </div>
      </article>
      
      <div className="flex space-x-3">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          編集
        </button>
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
          削除
        </button>
      </div>
    </main>
  );
}