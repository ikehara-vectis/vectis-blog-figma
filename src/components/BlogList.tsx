import BlogCard from './BlogCard';
import { mockBlogPosts } from '../data/mockData';

export default function BlogList() {
  return (
    <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">記事一覧</h1>
          <p className="mt-2 text-gray-600">最新の技術情報をお届けします</p>
        </div>
        
        <div className="grid gap-6">
          {mockBlogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}