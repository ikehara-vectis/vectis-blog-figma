import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogList from './components/BlogList';
import BlogDetail from './components/BlogDetail';
import BlogForm from './components/BlogForm';
import { mockBlogPosts } from './data/mockData';

type Page = 'list' | 'detail' | 'create' | 'edit';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('list');

  const renderPage = () => {
    switch (currentPage) {
      case 'list':
        return <BlogList />;
      case 'detail':
        return <BlogDetail />;
      case 'create':
        return <BlogForm mode="create" />;
      case 'edit':
        return (
          <BlogForm 
            mode="edit" 
            initialData={{
              title: mockBlogPosts[0].title,
              content: mockBlogPosts[0].content
            }}
          />
        );
      default:
        return <BlogList />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      {renderPage()}
      <Footer />
      
      {/* デバッグ用ナビゲーション */}
      <div className="fixed bottom-4 right-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg">
        <div className="text-sm font-medium text-gray-700 mb-2">ページ切り替え（デバッグ用）</div>
        <div className="flex flex-col space-y-2">
          <button 
            onClick={() => setCurrentPage('list')}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              currentPage === 'list' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            一覧ページ
          </button>
          <button 
            onClick={() => setCurrentPage('detail')}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              currentPage === 'detail' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            詳細ページ
          </button>
          <button 
            onClick={() => setCurrentPage('create')}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              currentPage === 'create' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            作成ページ
          </button>
          <button 
            onClick={() => setCurrentPage('edit')}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              currentPage === 'edit' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            編集ページ
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;