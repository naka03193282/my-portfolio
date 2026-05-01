"use client";

import { useState } from "react";

type Work = {
  id: number;
  category: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  gradient: string;
  emoji: string;
};

const works: Work[] = [
  {
    id: 1,
    category: "#AI Application",
    title: "ショッピングコロシアム",
    shortDesc:
      "日常の買い物で迷った時、価値観の異なる複数のAIがそれぞれの立場から議論し、ユーザの意思決定を助けるアプリです。コスパ重視・品質重視・トレンド重視など多角的な視点でアドバイスを提供します。議論のプロセスをリアルタイムで可視化することで、「なぜその選択が良いのか」を直感的に理解できるUXを目指しました。",
    fullDesc:
      "日常の買い物で迷った時、価値観の異なる複数のAIがそれぞれの立場から議論し、ユーザの意思決定を助けるアプリです。コスパ重視・品質重視・トレンド重視など異なるペルソナを持つAIが意見を出し合うことで、ユーザは多角的な視点から商品を比較検討できます。LLMを活用したマルチエージェント構成で実装しており、議論の過程も可視化することで「なぜその選択が良いのか」を直感的に理解できるUXを目指しました。",
    tags: ["AI", "LLM", "マルチエージェント", "意思決定支援"],
    gradient: "from-violet-400 via-purple-400 to-indigo-500",
    emoji: "🛒",
  },
  {
    id: 2,
    category: "#Safety App",
    title: "自転車交通安全支援アプリ",
    shortDesc:
      "スマートフォンの加速度・GPSデータを参加型センシングで収集し、機械学習で危険箇所を推定・地図上に可視化するアプリです。急ブレーキや急ハンドルなどの異常イベントを自動検出し、ヒートマップで安全情報を共有します。研究室のプロジェクトとして開発を進めています。",
    fullDesc:
      "スマートフォンの加速度・GPSセンサを活用し、自転車走行中のデータをリアルタイムでサーバに収集します。急ブレーキや急ハンドルなどの異常イベントを自動検出し、機械学習モデルで危険箇所の位置推定を行います。収集したデータは地図上にヒートマップとして可視化し、誰もが道路の安全情報を閲覧・参照できるWebアプリとして提供します。研究室プロジェクトとして開発中で、バックエンドはPython / FastAPI、フロントエンドはReact / Next.jsで実装しています。",
    tags: ["参加型センシング", "地図可視化", "安全支援", "Python", "Next.js"],
    gradient: "from-emerald-400 via-teal-400 to-cyan-500",
    emoji: "🚲",
  },
];

export default function Works() {
  const [selected, setSelected] = useState<Work | null>(null);

  return (
    <section id="works">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 underline decoration-2 underline-offset-8">
        Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {works.map((work) => (
          <button
            key={work.id}
            type="button"
            onClick={() => setSelected(work)}
            className="text-left bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
          >
            <div
              className={`w-full h-52 bg-gradient-to-br ${work.gradient} flex items-center justify-center`}
            >
              <span className="text-8xl opacity-60 select-none">{work.emoji}</span>
            </div>
            <div className="p-6">
              <p className="text-blue-500 text-sm font-medium mb-1">{work.category}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {work.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{work.shortDesc}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`w-full h-72 bg-gradient-to-br ${selected.gradient} flex items-center justify-center`}
            >
              <span className="text-9xl opacity-60 select-none">{selected.emoji}</span>
            </div>
            <div className="p-12">
              <div className="flex items-start justify-between mb-1">
                <p className="text-blue-500 text-sm font-medium">{selected.category}</p>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="閉じる"
                  className="text-gray-400 hover:text-gray-600 transition-colors ml-4 flex-shrink-0"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{selected.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">{selected.fullDesc}</p>
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
