import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import styles from './src/constants/Styles';
import Strings from './src/constants/Strings';
import Colors from './src/constants/Colors';
import {MathJaxSvg} from 'react-native-mathjax-html-to-svg';
import MathView from 'react-native-math-view';

const App = () => {
  const [checkAns, setCheckAns] = useState(false);

  const handleAns = () => {
    setCheckAns(true);
  };
  return (
    <View style={styles.conatiner}>
      <View style={styles.questionView}>
        <Text style={styles.quesTxt}>
          Which one among below is a Quaratic formula ?
        </Text>
      </View>
      <View style={styles.answer}>
        <Text style={styles.optionTxt}>A</Text>
        <TouchableOpacity
          style={[
            styles.optionBtn,
            {backgroundColor: checkAns ? Colors.right : Colors.buttonBack},
          ]}
          onPress={handleAns}>
          <MathView math={Strings.optionOne} />
        </TouchableOpacity>
      </View>
      <View style={styles.answer}>
        <Text style={styles.optionTxt}>B</Text>
        <TouchableOpacity
          style={[
            styles.optionBtn,
            {backgroundColor: checkAns ? Colors.wrong : Colors.buttonBack},
          ]}
          onPress={handleAns}>
          <MathJaxSvg fontSize={16} color="black" fontCache={true}>
            {Strings.optionTwo}
          </MathJaxSvg>
        </TouchableOpacity>
      </View>
      <View style={styles.answer}>
        <Text style={styles.optionTxt}>C</Text>
        <TouchableOpacity
          style={[
            styles.optionBtn,
            {backgroundColor: checkAns ? Colors.wrong : Colors.buttonBack},
          ]}
          onPress={handleAns}>
          <MathView math="\cos\left(x\right)=\frac{b}{c}" />
        </TouchableOpacity>
      </View>
      <View style={styles.answer}>
        <Text style={styles.optionTxt}>D</Text>
        <TouchableOpacity
          style={[
            styles.optionBtn,
            {backgroundColor: checkAns ? Colors.wrong : Colors.buttonBack},
          ]}
          onPress={handleAns}>
          <MathJaxSvg fontSize={16} color="#000000" fontCache={true}>
            {Strings.optionFour}
          </MathJaxSvg>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
