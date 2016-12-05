import { connect } from 'react-redux';
import Button from '../components/button';
import { makeBark } from '../actions/dog-actions';

const mapDispatchToProps = dispatch => ({
  action: () => { dispatch(makeBark()); },
  actionLabel: 'Bark',
});

// 適切なactionsとdataを2つのcomponentsに伝えるためのコンcontainersを作る connect
// ButtonとmakeBarkアクション、Reduxのdispatchメソッドを結びつける
export default connect(null, mapDispatchToProps)(Button);
