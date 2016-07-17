import React from 'react';
import CounterApp from '../component/CounterApp';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

export default function Main() {
  return (
    <div style={styles.container}>
      <h1>Counter App</h1>
      <CounterApp />
    </div>
  );
}
