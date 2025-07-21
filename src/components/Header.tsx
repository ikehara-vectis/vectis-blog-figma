export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">
              ベクティスブログ
            </h1>
          </div>
          
          <nav className="flex items-center space-x-8">
            <a 
              href="/" 
              className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              記事一覧
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              新規投稿
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}