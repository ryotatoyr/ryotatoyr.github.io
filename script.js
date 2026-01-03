document.addEventListener("DOMContentLoaded", () => {
  const projectsData = [
    {
      title: "学園祭実行委員会Webアプリケーション",
      content: `
                    <div class="space-y-4">
                        <p><strong>概要:</strong> 5～7人のチームで、11月祭の学内ポータル「PENGUIN」の開発・保守・管理を担当。このアプリケーションは、企画出展団体への情報発信や、学生が出展手続きを行うためのものです。</p>
                        <p><strong>URL:</strong> <a href="https://student.nf.la" target="_blank" class="text-indigo-600 hover:underline">学内ポータル PENGUIN</a></p>
                        <p><strong>担当範囲:</strong> 個々の機能の要件定義、DB設計、API開発、フロントエンド実装までを一貫して担当しました。</p>
                        <p><strong>使用技術:</strong> React/Next.js, Django REST Framework, MySQL, Docker, AlmaLinux, Shibboleth IdP</p>
                        <p><strong>制作期間:</strong> 2023年5月～2024年12月 (約1年8ヶ月)</p>
                        <div>
                            <h4 class="font-semibold text-lg mt-4 mb-2">構造的な課題解決へのアプローチ</h4>
                            <p>「実装すること」を目的にせず、まずは現場の業務フローとシステム設計の乖離を徹底的に洗い出しました。その結果、DB設計の根本的な見直しが必要な部分があると判断し、構造レベルからの改善を行いました。また、開発期間を最大化するための組織的な働きかけも行い、技術と運用の両面からプロジェクトを成功に導きました。</p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg mt-4 mb-2">苦労した点</h4>
                            <p><strong>技術的課題：</strong> 従来は紙媒体で行われていた複雑な手続きをシステム化する際、バックエンドで正確に再現することに挑戦しました。業務フローを細分化・整理した上で実装を進めることで、この課題を乗り越えました。</p>
                            <p class="mt-2"><strong>プロジェクト管理：</strong> 開発のピーク時期に大規模なトラブルが発生し、大学側との調整と並行して対応する必要がありました。限られたリソースと変更されたスケジュールの中、メンバー間の進捗共有と相互サポートを徹底することで、チーム一丸となって乗り切りました。</p>
                        </div>
                    </div>
                `,
    },
    {
      title: "ハッカソン受賞作品",
      content: `
                    <div class="space-y-4">
                        <p><strong>概要:</strong> 2025年7月に開催された「Progateハッカソン Powered by AWS」に参加。サーフィンに関するデータ分析モバイルアプリケーションを開発し、サポート企業のエムスリー株式会社様より企業賞を受賞しました。</p>
                        <p><strong>URL:</strong> <a href="https://topaz.dev/projects/c7e9f92c815ead6e0b2d" target="_blank" class="text-indigo-600 hover:underline">Topazプロジェクトページ</a> / <a href="https://github.com/progate-surfing-hackathon" target="_blank" class="text-indigo-600 hover:underline">GitHub</a></p>
                        <p><strong>担当範囲:</strong> チームの一員として、データベース移行、フロントエンド実装、バックエンド開発と複数の領域を担当しましたが、<strong>特にPythonとAWS Lambdaを用いたデータ分析バックエンド機能の開発に主軸を置いて貢献しました。</strong></p>
                        <p><strong>使用技術:</strong> Python, Flutter, Dart, Prisma, AWS Lambda, RDS</p>
                        <p><strong>制作期間:</strong> 2025年7月 (ハッカソン期間)</p>
                        <div>
                            <h4 class="font-semibold text-lg mt-4 mb-2">工夫した点</h4>
                            <p><strong>1. 実用性を考慮した予測モデルの選定と実装：</strong><br>支出予測機能の実装にあたり、機械学習と重回帰分析を比較検討。学習データの準備のしやすさから、scikit-learnを用いた重回帰分析を選択しました。また、翌日の予測に必要な気温（天気予報API）や歩数（過去の平均値）といった変数も予測するロジックを構築。当初はLambdaでの実装を検討しましたが、処理負荷を考慮し、EC2での定期実行を選択するなど、実運用を見据えたアーキテクチャを考えました。</p>
                            <p class="mt-2"><strong>2. 処理速度を意識したパフォーマンスチューニング：</strong><br>将来的なデータ増加による実行時間増大を見越し、処理を分担。データの集約や並べ替えはSQLで高速に実行し、Pythonでは分析処理に専念させることでパフォーマンスを向上させました。また、必要に応じてインデックスを追加し、DBの検索性を高めました。</p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg mt-4 mb-2">成長したこと</h4>
                            <p>ハッカソンという短期間で、支出予測というコア機能のバックエンド実装を完遂しました。重回帰分析モデルの選定から実装、そしてSQLとアプリケーションの役割分担によるパフォーマンスチューニングまで、一連のプロセスを実践できたことは大きな成長です。特に、LambdaとEC2の使い分けなど、技術選定の背景にあるトレードオフを意識してアーキテクチャを決定するという、より実務に近い経験を積むことができました。この経験を通じて、単に機能を実装するだけでなく、パフォーマンスや運用を考慮した設計の重要性を深く学びました。</p>
                        </div>
                    </div>
                `,
    },
    {
      title: "授業での数値計算・データ分析",
      content: `
                    <div class="space-y-4">
                        <p><strong>概要:</strong> 大学の講義にて、研究活動で用いられるプログラミングを学習。Runge-Kutta法による数値積分、再解析データの圧縮・可視化、最小二乗法による震源推定など、地球惑星科学分野の課題解決にプログラミングを活用しました。</p>
                        <p><strong>使用技術:</strong> Python, Numpy, Pandas, Scikit-learn, Matplotlib, Fortran</p>
                        <p><strong>制作期間:</strong> 2024年10月～現在</p>
                        <div>
                            <h4 class="font-semibold text-lg mt-4 mb-2">実装した主な機能</h4>
                            <ul class="list-disc list-inside space-y-2 text-stone-600">
                                <li><strong>気候データ可視化:</strong> 赤道帯域の風速分布や気候現象の相関解析を実装し、研究で使用される高品質な可視化を実現</li>
                                <li><strong>数値積分シミュレーション:</strong> Runge-Kutta法を用いた微分方程式の数値解法で、パラメータ変化による解の振る舞いをアニメーション化</li>
                                <li><strong>データ分析・統計処理:</strong> 大量の気候データから有意な相関や傾向を抽出する統計解析手法を実装</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg mt-4 mb-2">工夫した点</h4>
                            <p>大気の再解析データを可視化する際、ただ図にするだけでなく、目的の気候現象が明瞭に判断できるよう、データの範囲選定や可視化手法（カラーマップ、等高線の間隔など）を試行錯誤しました。また、数値積分のアニメーション作成では、パラメータの違いによる解の変化を直感的に理解できるよう、フレーム間の補間や色彩設計に配慮しました。</p>
                        </div>
                        <div>
                            <h4 class="font-semibold text-lg mt-4 mb-2">苦労した点</h4>
                            <p>気候現象に関する微分方程式の数値積分プログラムを作成する際、汎用性を持たせることに苦労しました。初期値や計算点の数を柔軟に変更できる入力インターフェースや、多様な描画結果に対応できるようなコード構造を設計することで、再利用性の高いプログラムを目指しました。</p>
                        </div>
                        <div class="mt-8">
                            <h4 class="font-semibold text-lg mb-4">講義でのプログラム例</h4>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                <div class="space-y-4">
                                    <img src="media/zonal_wind_at_equator.png" alt="赤道帯域風速分布" class="w-full h-auto rounded-lg shadow-md">
                                    <p class="text-sm text-stone-600 text-center">赤道帯域における風速分布の解析結果</p>
                                </div>
                                <div class="space-y-4">
                                    <img src="media/one_point_correlation_map.png" alt="相関マップ" class="w-full h-auto rounded-lg shadow-md">
                                    <p class="text-sm text-stone-600 text-center">気候データの一点相関解析マップ</p>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                <div class="space-y-2">
                                    <img src="media/6-4.gif" alt="数値計算アニメーション1" class="w-full h-auto rounded-lg shadow-md">
                                    <p class="text-sm text-stone-600 text-center">数値積分による時系列変化(解の爆発)</p>
                                </div>
                                <div class="space-y-2">
                                    <img src="media/6-5_N5.gif" alt="数値計算アニメーション2" class="w-full h-auto rounded-lg shadow-md">
                                    <p class="text-sm text-stone-600 text-center">N=5での数値解析結果(多角形解)</p>
                                </div>
                                <div class="space-y-2">
                                    <img src="media/6-5_N8.gif" alt="数値計算アニメーション3" class="w-full h-auto rounded-lg shadow-md">
                                    <p class="text-sm text-stone-600 text-center">N=8での数値解析結果(多角形解の自然崩壊)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
    },
    {
      title: "生成AIインターンシップ - ポーカーエージェント開発",
      content: `
                    <div class="space-y-4">
                        <p><strong>概要:</strong> 短期インターンシップにて、テキサスホールデムポーカーのLLMエージェント開発プロジェクトに参加。Team 4のエージェント部分を2人チームで協力して開発しました。</p>
                        <p><strong>リポジトリ:</strong> <a href="https://github.com/ryotatoyr/adk_porker_2025" target="_blank" class="text-indigo-600 hover:underline">ryotatoyr/adk_porker_2025</a> (fork from gochipon/adk_poker_2025)</p>
                        <p><strong>担当範囲:</strong> Team 4エージェントの戦略ロジック開発、プロンプトエンジニアリング、バグ修正、機能追加など</p>
                        <p><strong>使用技術:</strong> Google ADK, Python, LLM API連携, JSON処理, ポーカー戦略アルゴリズム</p>
                        <p><strong>開発期間:</strong> 3日間(短期インターンシップ期間中)</p>

                        <div class="mt-6">
                          <h4 class="font-semibold text-lg mb-3">主な成果</h4>
                          <ul class="list-disc list-inside space-y-2">
                            <li><strong>積極的な貢献:</strong> 13件のPull Requestをマージ、継続的な開発・改善を実施</li>
                            <li><strong>チーム協力:</strong> 2人チームでコードレビューやペアプログラミングを実践</li>
                            <li><strong>技術的成長:</strong> LLM APIとの連携、AI agentのロジック開発、JSON構造化データの処理</li>
                            <li><strong>問題解決:</strong> Agent workflowの作成（Sequential, Parallel)に駆動するagentの作成、ポーカーのフェーズに合わせたロジック開発</li>
                          </ul>
                        </div>

                        <div class="mt-6">
                          <h4 class="font-semibold text-lg mb-3">プロジェクトの特徴</h4>
                          <ul class="list-disc list-inside space-y-2">
                            <li>WebアプリとCLIの両方に対応したテキサスホールデムポーカーシステム</li>
                            <li>リアルタイム観戦機能とログビューワー機能</li>
                            <li>完全実装されたNo-Limitルール、ハンド評価、ショーダウン機能</li>
                            <li>LLMプレイヤー機能: JSON形式でゲーム状態を受け取り、戦略的判断を実行</li>
                          </ul>
                        </div>

                        <div class="mt-6">
                          <h4 class="font-semibold text-lg mb-3">学んだこと</h4>
                          <p>このインターンシップを通じて、初めてAI agentの開発を体験しました。Google ADKを用いたLLMを用いた機能・プロダクトの開発は、ブラックボックス的な内部処理の中でアウトプットが安定しない問題がありました。ワークフローの設計や確率計算メソッドの分割・プロンプトの工夫により、どうすればロジカルに安定したアウトプットを実現できるかを学びました。また、実際のチーム開発でのGitフローの重要性、コードレビューの価値、そしてLLMを活用したアプリケーション開発の実践的なスキルを身につけました。</p>
                        </div>
                    </div>
                `,
    },
  ];

  const modal = document.getElementById("project-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const modalCloseButton = document.getElementById("modal-close-button");
  const detailButtons = document.querySelectorAll(".project-details-button");

  const openModal = (projectId) => {
    const project = projectsData[projectId];
    modalTitle.textContent = project.title;
    modalBody.innerHTML = project.content;
    modal.classList.remove("opacity-0", "pointer-events-none");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    modal.classList.add("opacity-0", "pointer-events-none");
    document.body.style.overflow = "auto";
  };

  detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const projectId = button.dataset.projectId;
      openModal(projectId);
    });
  });

  modalCloseButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  document.querySelectorAll("#mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
});
