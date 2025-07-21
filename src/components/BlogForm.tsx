import { useState } from "react";

type BlogFormProps = {
  mode: "create" | "edit";
  initialData?: {
    title: string;
    content: string;
  };
};

export default function BlogForm({ mode, initialData }: BlogFormProps) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [content, setContent] = useState(initialData?.content || "");
  // const [errors, setErrors] = useState({ title: "", content: "" });

  const isEdit = mode === "edit";
  const pageTitle = isEdit ? "記事を編集" : "新しい記事を作成";
  const submitButtonText = isEdit ? "更新する" : "投稿する";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信処理
    console.log("Form submitted:", { title, content });
  };

  return (
    <main className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="space-y-6">
          <header>
            <h1 className="text-2xl font-bold text-gray-900">{pageTitle}</h1>
            <p className="mt-2 text-gray-600">
              {isEdit
                ? "記事の内容を編集してください"
                : "新しい記事を作成してください"}
            </p>
          </header>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* タイトル入力 */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                タイトル
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="記事のタイトルを入力してください"
                required
              />
              <p className="mt-2 text-sm text-red-600">タイトルは必須項目です</p>
            </div>

            {/* 内容入力 */}
            <div>
              <label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                内容
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical align-top"
                placeholder="記事の内容を入力してください"
                required
              />
              <p className="mt-2 text-sm text-red-600">内容は必須項目です</p>
            </div>

            {/* ボタン */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                {submitButtonText}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
