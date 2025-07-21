import type { BlogPost } from '../types/blog';

type BlogCardProps = {
  post: BlogPost;
};

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
      <div>
        <div className="flex gap-4 text-sm text-gray-500 mb-3">
          <div>投稿日: {formatDate(post.publishedAt)}</div>
          {post.publishedAt !== post.updatedAt && (
            <div>更新日: {formatDate(post.updatedAt)}</div>
          )}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          {post.title}
        </h2>
      </div>
    </article>
  );
}