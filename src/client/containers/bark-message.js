// @flow
import { connect } from 'react-redux';
import Message from '../components/message';


const mapStateToProps = state => ({
  message: state.getIn(['dog', 'hasBarked']) ? 'The dog barked' : 'The dog did not bark',
});
// BarkMessageはアプリケーションの状態とMessageを結びつける。
// 状態が変更されると、Messageは自動的に適切なmessage属性を再描画
export default connect(mapStateToProps)(Message);
