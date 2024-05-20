import React, { useState } from 'react';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import type { MenuProps } from 'antd';
import CustomTable from './components/Table';
import Componente1 from './components/component1';
import Componente2 from './components/component2';
import Componente3 from './components/component3';
import Componente4 from './components/component4';
import Componente5 from './components/component5';
import Componente6 from './components/component6';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
];

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [selectedKey, setSelectedKey] = useState('1'); // Estado para la opción seleccionada
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const handleMenuClick = (e: { key: React.Key }) => {
        setSelectedKey(e.key as string);
    };

    const renderContent = () => {
        switch (selectedKey) {
            case '1':
                return <CustomTable />;
            case '2':
                // Renderiza los componentes correspondientes para la opción 2
                return (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>1. <Componente1 /></div>
                        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>2. <Componente2 /></div>
                        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>3. <Componente3 /></div>
                        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>4. <Componente4 /></div>
                        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>5. <Componente5 /></div>
                        <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>6. <Componente6 /></div>
                    </div>
                );
            case '9':
                return <div>Files Content</div>;
            default:
                return <div>Bill is a cat.</div>;
        }
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu 
                    theme="dark" 
                    defaultSelectedKeys={['1']} 
                    mode="inline" 
                    items={items} 
                    onClick={handleMenuClick} 
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Tabla</Breadcrumb.Item>
                        <Breadcrumb.Item>Componentes</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {renderContent()}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    {new Date().getFullYear()} Created by Freddy Paguay
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;
