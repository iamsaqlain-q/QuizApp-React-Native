import {StyleSheet} from 'react-native';
import Colors from './Colors';
import Sizes from './Sizes';

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: Colors.primaryBack,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  questionView: {
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 'auto',
    backgroundColor: Colors.questionBack,
    borderRadius: Sizes.textSize,
    padding: 5,
  },
  quesTxt: {
    textAlign: 'center',
    fontSize: Sizes.textSize,
    fontWeight: 'bold',
    fontFamily: 'notoserif',
  },
  answer: {
    padding: Sizes.textSize,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionTxt: {
    width: Sizes.textSize,
    backgroundColor: Colors.questionBack,
    borderRadius: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
    margin: 5,
  },
  optionBtn: {
    width: 200,
    borderRadius: 13,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
