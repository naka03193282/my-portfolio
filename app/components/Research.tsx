const experiences = [
  {
    period: "2022.04 –",
    org: "大阪公立大学 工学部 情報工学科",
    description:
      "情報工学を専攻し、プログラミング基礎から機械学習まで幅広く学習を行いました。研究活動ではスマートフォン・スマートウォッチを用いたモバイルデバイスを用いたセンシング技術について学びました。卒業研究では、参加型センシングを用いた自転車走行時における道路上の危険箇所の位置推定に取り組みました。",
  },
  {
    period: "2026.04 –",
    org: "大阪公立大学大学院 情報科学研究科",
    description:
      "先進的計算基盤研究室に所属し、学部の研究を継続するとともに、走行データをリアルタイムで収集・分析して道路上の危険箇所を可視化し、誰もが閲覧できるアプリの開発に取り組んでいます。またTypeScript/Next.jsを用いたシステム開発の学習にも力を入れています。",
  },
];

export default function Research() {
  return (
    <section id="research">
      <div className="bg-white rounded-lg shadow-lg p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 border-b-2 border-gray-200 pb-4">My Experience</h2>
        <div className="relative border-l-2 border-blue-200 ml-4 space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8">
              <span className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-2 border-white" />
              <p className="text-sm text-blue-600 font-semibold mb-1">{exp.period}</p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">{exp.org}</h3>
              <p className="text-gray-700 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
