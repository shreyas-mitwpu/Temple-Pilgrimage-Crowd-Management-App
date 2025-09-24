import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';

export default function App() {
  const [prediction, setPrediction] = React.useState(null);

  const fetchPrediction = async () => {
    const res = await fetch('http://localhost:5000/api/crowd-prediction');
    const data = await res.json();
    setPrediction(data);
  };

  return (
    <SafeAreaView>
      <Text>Temple Crowd Management</Text>
      <Button title="Get Crowd Prediction" onPress={fetchPrediction} />
      {prediction && (
        <Text>
          Prediction: {prediction.prediction}, Count: {prediction.count}
        </Text>
      )}
    </SafeAreaView>
  );
}