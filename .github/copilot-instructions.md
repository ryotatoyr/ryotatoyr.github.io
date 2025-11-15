# Portfolio Website - Copilot Instructions

このリポジトリは大田 凌太郎さんのポートフォリオサイト（静的 HTML/CSS/JavaScript）です。GitHub Pages による公開を前提とし、ローカルでの確認・変更はこのファイルの手順に従ってください。

**まずこのファイルを参照してください。ここに記載の情報が現状と一致しない場合のみ追加の検索やシェル操作を行ってください。**

## 目的と方針

- 単一ページの静的サイトとして素早くローカル確認・編集できることを重視します。
- CI ビルドやパッケージインストールは不要（CDN 経由で外部ライブラリを読みます）。

## ローカル開発（Quick start）

1. リポジトリルートに移動してローカルサーバを起動します（どちらか選択）。

- Python（推奨、簡単）:

  ```powershell
  cd C:\github.io\ryotatoyr.github.io
  python3 -m http.server 8000 --bind 127.0.0.1
  ```

- Node.js（任意）:

  ```powershell
  cd C:\github.io\ryotatoyr.github.io
  npx http-server -p 8000 -a 127.0.0.1
  ```

2. ブラウザで `http://127.0.0.1:8000` を開いて変更を確認します。

3. 編集は基本的に `index.html` を直接変更して、ブラウザをリロードしてください。

## 必須の手動テスト（変更後に必ず実行）

- トップページが正しく表示されること
- ヘッダーから各セクション（自己紹介、スキル、開発経験、連絡先）へ移動できること
- 各プロジェクトの「詳細を見る」ボタンでモーダルが開き、閉じられること
- 連絡先リンクが正しい外部リソースに遷移すること
- モバイルレイアウトでの表示崩れがないこと
- ブラウザコンソールにエラーが出ないこと

## 検証・自動ツール（任意）

- HTML バリデータ:

  ```powershell
  npx html-validate index.html
  ```

- コード整形（Prettier）:

  ```powershell
  npx prettier --check index.html
  # 修正する場合
  npx prettier --write index.html
  ```

- 静的サーバ（代替）:

  ```powershell
  npx http-server -p 8000 -a 127.0.0.1
  ```

注: 環境によっては初回実行でパッケージをダウンロードするため時間がかかる場合があります。

## リポジトリの主な構成

```
ryotatoyr.github.io/
├─ index.html          # 単一ファイルでほぼ全てのコンテンツとロジックを保持
├─ README.md
├─ media/              # 画像・GIF
└─ .github/
   ├─ copilot-instructions.md
   └─ validate-portfolio.sh
```

## 重要箇所の案内（index.html の目安行）

- head, meta, CDN 読み込み: ファイル冒頭
- ヘッダー/ナビゲーション: ページ上部
- Hero（自己紹介）セクション: 先頭付近
- スキル・開発経験・連絡先: 中央～下部
- モーダルと JS: ファイル末尾付近

（正確な行番号はファイル更新で変わるため、編集時に目視で確認してください。）

## バリデーションスクリプト

ローカルで総合チェックを行うスクリプトがあります:

```powershell
.\.github\validate-portfolio.sh
```

このスクリプトはローカルサーバの起動、HTTP レスポンス確認、ページ内の簡易検査などを行います。

## よくある問題と対処法

- ポート競合: `python3 -m http.server 8001 --bind 127.0.0.1` など、別ポートで起動してください。
- CDN がブロックされる環境: 外観に影響は出るが HTML 自体は動作します。開発はオフラインでは制限あり。
- モーダルが動かない: ブラウザのコンソールでエラーを確認し、`projectsData` 配列やイベントリスナの有無をチェックしてください。

## 開発/編集の基本手順

1. `index.html` を編集
2. ローカルサーバを起動して表示を確認
3. 必要に応じて `validate-portfolio.sh` や `npx html-validate` で簡易チェック
4. 問題なければコミットしてプッシュ（main にマージされると GitHub Pages に自動デプロイされます）

## 連絡先やコンテンツ更新時の注意

- 連絡先リンクや公開プロジェクトの URL は必ず実際にクリックして確認してください。
- 個人情報の公開範囲に注意してください。

---

必要があれば更に整理（特定コマンドをスクリプト化、CI 追加、アクセシビリティ改善案の追記など）します。変更を反映したファイルを確認しますか?

# Portfolio Website - GitHub Copilot Instructions

This is Ryotaro Ota's personal portfolio website, a static HTML/CSS/JavaScript site hosted on GitHub Pages. The site showcases personal projects, skills, and contact information with interactive modal elements.

**ALWAYS reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the information provided here.**

## Working Effectively

### Quick Start & Local Development

- Start local development server (takes <1 second):
  ```bash
  cd /home/runner/work/ryotatoyr.github.io/ryotatoyr.github.io
  python3 -m http.server 8000
  ```
- **IMMEDIATE VALIDATION**: Server starts instantly. Access at `http://localhost:8000`
- **Browser Testing**: Website loads immediately (<1 second) with full functionality

### Testing the Website

- **ALWAYS manually test after making changes** - this is critical since there are no automated tests
- **Complete User Scenario Validation**:
  1. Load `http://localhost:8000` - should display portfolio homepage
  2. Test navigation links (自己紹介, スキル, 開発経験, 連絡先) - should scroll to sections
  3. Click "詳細を見る" buttons - should open project modals with detailed information
  4. Test modal close functionality (× button) - should close modal and return to main page
  5. Test contact links (email, GitHub, LinkedIn) - should open appropriate applications/sites
  6. Test responsive design - resize browser window to verify mobile layout

### No Build Process Required

- **This is a static website** - no compilation, bundling, or build steps needed
- **Direct file editing** - make changes directly to `index.html` and refresh browser
- **Instant feedback** - changes appear immediately after browser refresh
- **No dependencies to install** - all external resources loaded via CDN

## Repository Structure

### Key Files and Directories

````
/home/runner/work/ryotatoyr.github.io/ryotatoyr.github.io/
# Portfolio Website - Copilot Instructions

このリポジトリは大田 凌太郎さんのポートフォリオサイト（静的 HTML/CSS/JavaScript）です。GitHub Pages による公開を前提とし、ローカルでの確認・変更はこのファイルの手順に従ってください。

**まずこのファイルを参照してください。ここに記載の情報が現状と一致しない場合のみ追加の検索やシェル操作を行ってください。**

## 目的と方針

- 単一ページの静的サイトとして素早くローカル確認・編集できることを重視します。
- CI ビルドやパッケージインストールは不要（CDN 経由で外部ライブラリを読みます）。

## ローカル開発（Quick start）

1) リポジトリルートに移動してローカルサーバを起動します（どちらか選択）。

- Python（推奨、簡単）:

   ```powershell
   cd C:\github.io\ryotatoyr.github.io
   python3 -m http.server 8000 --bind 127.0.0.1
````

- Node.js（任意）:

  ```powershell
  cd C:\github.io\ryotatoyr.github.io
  npx http-server -p 8000 -a 127.0.0.1
  ```

2. ブラウザで `http://127.0.0.1:8000` を開いて変更を確認します。

3. 編集は基本的に `index.html` を直接変更して、ブラウザをリロードしてください。

## 必須の手動テスト（変更後に必ず実行）

- トップページが正しく表示されること
- ヘッダーから各セクション（自己紹介、スキル、開発経験、連絡先）へ移動できること
- 各プロジェクトの「詳細を見る」ボタンでモーダルが開き、閉じられること
- 連絡先リンクが正しい外部リソースに遷移すること
- モバイルレイアウトでの表示崩れがないこと
- ブラウザコンソールにエラーが出ないこと

## 検証・自動ツール（任意）

- HTML バリデータ:

  ```powershell
  npx html-validate index.html
  ```

- コード整形（Prettier）:

  ```powershell
  npx prettier --check index.html
  # 修正する場合
  npx prettier --write index.html
  ```

- 静的サーバ（代替）:

  ```powershell
  npx http-server -p 8000 -a 127.0.0.1
  ```

注: 環境によっては初回実行でパッケージをダウンロードするため時間がかかる場合があります。

## リポジトリの主な構成

```
ryotatoyr.github.io/
├─ index.html          # 単一ファイルでほぼ全てのコンテンツとロジックを保持
├─ README.md
├─ media/              # 画像・GIF
└─ .github/
    ├─ copilot-instructions.md
    └─ validate-portfolio.sh
```

## 重要箇所の案内（index.html の目安行）

- head, meta, CDN 読み込み: ファイル冒頭
- ヘッダー/ナビゲーション: ページ上部
- Hero（自己紹介）セクション: 先頭付近
- スキル・開発経験・連絡先: 中央～下部
- モーダルと JS: ファイル末尾付近

（正確な行番号はファイル更新で変わるため、編集時に目視で確認してください。）

## バリデーションスクリプト

ローカルで総合チェックを行うスクリプトがあります:

```powershell
.\.github\validate-portfolio.sh
```

このスクリプトはローカルサーバの起動、HTTP レスポンス確認、ページ内の簡易検査などを行います。

## よくある問題と対処法

- ポート競合: `python3 -m http.server 8001 --bind 127.0.0.1` など、別ポートで起動してください。
- CDN がブロックされる環境: 外観に影響は出るが HTML 自体は動作します。開発はオフラインでは制限あり。
- モーダルが動かない: ブラウザのコンソールでエラーを確認し、`projectsData` 配列やイベントリスナの有無をチェックしてください。

## 開発/編集の基本手順

1. `index.html` を編集
2. ローカルサーバを起動して表示を確認
3. 必要に応じて `validate-portfolio.sh` や `npx html-validate` で簡易チェック
4. 問題なければコミットしてプッシュ（main にマージされると GitHub Pages に自動デプロイされます）

## 連絡先やコンテンツ更新時の注意

- 連絡先リンクや公開プロジェクトの URL は必ず実際にクリックして確認してください。
- 個人情報の公開範囲に注意してください。

---

必要があれば更に整理（特定コマンドをスクリプト化、CI 追加、アクセシビリティ改善案の追記など）します。変更を反映したファイルを確認しますか？

```bash

```
