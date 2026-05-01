const tags = ["参加型センシング", "リアルタイム処理", "道路安全", "Webアプリ", "Python", "React"];

export default function Research() {
  return (
    <section id="research">
      <div className="bg-white rounded-lg shadow-lg p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Research</h2>
        <div className="border-l-4 border-blue-600 pl-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            自転車事故ゼロを目指した危険箇所推定
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            日本では毎年多くの自転車事故が発生しており、その多くが特定の危険箇所に集中しています。
            本研究では、自転車利用者が持つスマートフォンのセンサデータ（加速度・GPS など）を参加型センシングによって収集し、
            機械学習を用いて危険箇所の存在・位置を推定することを目的としています。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            収集した走行データはリアルタイムでサーバに送信され、異常検知アルゴリズムによって
            急ブレーキ・急ハンドルなどのイベントを自動的に抽出します。
            これらのデータを地図上に可視化することで、誰もが道路の危険情報を閲覧・共有できる
            Web アプリケーションの構築を目指しています。
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            将来的には行政や道路管理者と連携し、収集したデータをインフラ整備に活用することで、
            社会全体の自転車安全性向上に貢献することを目標としています。
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
