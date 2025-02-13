// eslint-disable-next-line

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../css/shikin.css';

class ScrollToTopOnMount extends React.Component {
    componentDidMount(prevProps) {
        window.scrollTo(0, 0)
    }

    render() {
        return null
    }
}

const shikin_kessai = () => {
    return (
        <>
            <ScrollToTopOnMount/>
            <Header />
            <main className="shikin_main">
                <h2 className="page-title" data-i18n="law2.mainText">特定商取引法に基づく表示（JPYCショッピング）</h2>
                <table className="shikin_table">
                    <tr>
                        <th data-i18n="law2.table.first.left">販売業者名</th>
                        <td data-i18n="law2.table.first.right">JPYC株式会社</td>
                    </tr>
                    <tr>
                        <th data-i18n="law2.table.second.left">責任者</th>
                        <td data-i18n="law2.table.second.right">代表取締役社長 岡部典孝</td>
                    </tr>
                    <tr>
                        <th data-i18n="law2.table.third.left">所在地</th>
                        <td data-i18n="law2.table.third.right">〒105-0011 東京都港区芝公園4-8-12 猫来坊</td>
                    </tr>
                    <tr>
                        <th data-i18n="law2.table.fourth.left">電話番号</th>
                        <td data-i18n="law2.table.fourth.right">070-4105-4162</td>
                    </tr>
                    <tr>
                        <th data-i18n="law2.table.fifth.left">電話応対時間</th>
                        <td><span data-i18n="law2.table.fifth.right.first">平日　午前10時～午後7時00分まで（年末・年始を除く）</span><br /><span data-i18n="law2.table.fifth.right.second">※受付時間外の場合は、メールにてお問い合わせください。</span></td>
                    </tr>
                    <tr>
                        <th data-i18n="law2.table.sixth.left">メールアドレス</th>
                        <td>admin@jcam.co.jp</td>
                    </tr>
                    <tr>
                        <th data-i18n="law2.table.seventh.left">お問い合わせ</th>
                        <td>
                            <Link to="/company" data-i18n="law2.table.seventh.right.first">法人の方</Link><br />
                            <Link to="/individual" data-i18n="law2.table.seventh.right.second">一般の方</Link>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="law2.table.eighth.left">ウェブサイトURL</th>
                        <td>https://jpyc.jp</td>
                    </tr>
                    <tr>
                        <th data-i18n="law2.table.ninth.left">商品の販売金額（交換金額）</th>
                        <td data-i18n="law2.table.ninth.right">各ECサイトの商品ページにて表示される価格</td>
                    </tr>
                    <tr>
                        <th data-i18n="law2.table.tenth.left">商品代金以外の必要料金</th>
                        <td>
                            <span data-i18n="law2.table.tenth.right.first">JPYCを弊社に送金する際のネットワーク利用手数料（いわゆるGAS代）
</span><br /><br />
                            <span data-i18n="law2.table.tenth.right.second">配送料（商品を注文したECサイトに準拠します）</span>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="law2.table.eleventh.left">お支払い方法</th>
                        <td data-i18n="law2.table.eleventh.right">JPYCによる決済<br />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <span data-i18n="law2.table.twelfth.left.first">支払時期</span><br /><br />
                            <span data-i18n="law2.table.twelfth.left.second">申込みの有効期限</span>
                        </th>
                        <td><span data-i18n="law2.table.twelfth.right.first">弊社より注文確認メール到着後、1週間以内にお支払ください。</span><br /><br />
                            <span data-i18n="law2.table.twelfth.right.second">お申込日から1週間以内にご入金を確認できなかった場合はキャンセルされたものとみなし、購入申込みは取り消させていただきます。</span><br />
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="law2.table.thirteenth.left">引き渡し期間</th>
                        <td>
                            <span data-i18n="law2.table.thirteenth.right.first">（商品購入）</span><br /><br />
                            <span data-i18n="law2.table.thirteenth.right.second">お客様のご入金を確認後、原則翌営業日まで指定のECサイトにて購入申込します。商品の発送時期は、ECサイトの商品状況に依存します。</span>
                        </td>
                    </tr>
                    <tr>
                        <th data-i18n="law2.table.fourteenth.left">返品・交換・キャンセル</th>
                        <td data-i18n="law2.table.fourteenth.right">購入・手続き完了後の返品・交換・キャンセルはお受けできません。</td>
                    </tr>
                </table>
            </main>
            <Footer />
        </>
    );
};

export default shikin_kessai;
