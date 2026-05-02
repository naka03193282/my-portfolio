"use client";

import Image from "next/image";
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
  image?: string;
  imageClassName?: string;
};

const works: Work[] = [
  {
    id: 1,
    category: "#Web Application",
    title: "自転車交通安全支援アプリ",
    shortDesc:
      "自転車の安全な走行を支援するため、道路上の障害物・危険箇所を地図上に可視化するWebアプリです。スマートウォッチのセンサから取得した走行データを参加型センシングで収集し、機械学習で危険箇所の位置を自動推定しています。",
    fullDesc:
      "自転車の安全な走行を支援するため、道路上の障害物・危険箇所を地図上に可視化するWebアプリです。スマートウォッチのセンサから取得した走行データを参加型センシングで収集し、機械学習で危険箇所の位置を自動推定しています。将来的には、一般ユーザーの走行データをリアルタイムで分析し、危険箇所の発生日時・危険度・状況などを誰もが自由に投稿・閲覧できるプラットフォームへの拡張を目指しています。",      tags: ["参加型センシング", "地図可視化", "安全支援", "Python", "Next.js"],
    gradient: "from-emerald-400 via-teal-400 to-cyan-500",
    emoji: "🚲",
    image: "/自転車webアプリ.png",
    // imageClassName: "scale-125",
  },
  {
    id: 2,
    category: "#Web Application",
    title: "ショッピングコロシアム",
    shortDesc:
      "日常の買い物で迷った時、価値観の異なる複数のAIがそれぞれの立場から議論し、ユーザの意思決定を助けるアプリです。コスパ重視・品質重視・トレンド重視など多角的な視点でアドバイスを提供します。議論のプロセスをリアルタイムで可視化することで、「なぜその選択が良いのか」を直感的に理解できるUXを目指しました。",
    fullDesc:
      "日常の買い物で迷った時、価値観の異なる複数のAIがそれぞれの立場から議論し、ユーザの意思決定を助けるアプリです。コスパ重視・品質重視・トレンド重視など異なるペルソナを持つAIが意見を出し合うことで、ユーザは多角的な視点から商品を比較検討できます。LLMを活用したマルチエージェント構成で実装しており、議論の過程も可視化することで「なぜその選択が良いのか」を直感的に理解できるUXを目指しました。",
    tags: ["AI", "LLM", "マルチエージェント", "意思決定支援"],
    gradient: "from-violet-400 via-purple-400 to-indigo-500",
    emoji: "🛒",
    image: "/ショッピングコロシアム.png",
  },
];

export default function Works() {
  const [selected, setSelected] = useState<Work | null>(null);

  return (
    <section id="works">
      <div className="bg-white rounded-lg shadow-lg p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b-2 border-gray-200 pb-4">Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {works.map((work) => (
          <button
            key={work.id}
            type="button"
            onClick={() => setSelected(work)}
            className="text-left bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col"
          >
            {work.image ? (
              <div className="w-full h-52 relative shrink-0">
                <Image src={work.image} alt={work.title} fill className="object-cover object-top" />
              </div>
            ) : (
              <div className={`w-full h-52 shrink-0 bg-gradient-to-br ${work.gradient} flex items-center justify-center`}>
                <span className="text-8xl opacity-60 select-none">{work.emoji}</span>
              </div>
            )}
            <div className="p-6 flex flex-col flex-1">
              <p className="text-blue-500 text-sm font-medium mt-2 mb-1">{work.category}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {work.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-4 flex-1">{work.shortDesc}</p>
              <div className="flex justify-end mt-3">
                <span className="inline-flex items-center gap-1 text-blue-500 text-sm font-medium group-hover:text-blue-700 transition-colors">
                  もっと見る
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </button>
        ))}
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="閉じる"
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {selected.image ? (
              <div className="w-full h-72 relative">
                <Image src={selected.image} alt={selected.title} fill className="object-cover object-top" />
              </div>
            ) : (
              <div className={`w-full h-72 bg-gradient-to-br ${selected.gradient} flex items-center justify-center`}>
                <span className="text-9xl opacity-60 select-none">{selected.emoji}</span>
              </div>
            )}
            <div className="p-12">
              <p className="text-blue-500 text-sm font-medium mb-1">{selected.category}</p>
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
