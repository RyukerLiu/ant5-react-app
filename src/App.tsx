import React from 'react';
import { Button } from 'antd';
import { ConfigProvider } from 'antd';


const MyApp: React.FC = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);


const App: React.FC = () => (
  <ConfigProvider theme={{ token: { colorPrimary: '#10A1B5' } }}>
    <MyApp />
  </ConfigProvider>
);
export default App;