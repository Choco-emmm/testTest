import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const YouthMemoriesScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>📜 致青春</Text>
            <Text style={styles.subtitle}>“那些年的风，吹过操场，吹过教室，也吹进了我们的回忆。”</Text>
            
            <View style={styles.card}>
                <Text style={styles.cardTitle}>🎒 那年夏天</Text>
                <Text style={styles.cardText}>阳光洒在课桌上，蝉鸣声声，我们笑着挥手告别。</Text>
            </View>
            
            <View style={styles.card}>
                <Text style={styles.cardTitle}>📖 图书馆角落</Text>
                <Text style={styles.cardText}>偷偷传过的纸条，藏在书里的日记，都是青春的注脚。</Text>
            </View>
            
            <View style={styles.card}>
                <Text style={styles.cardTitle}>🌅 操场黄昏</Text>
                <Text style={styles.cardText}>奔跑的身影，挥洒的汗水，定格成永不褪色的画面。</Text>
            </View>
            
            <Text style={styles.footer}>— 保留我们青春的回忆 —</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: '#fdf6e3' },
    title: { fontSize: 28, fontWeight: 'bold', textAlign: 'center', color: '#8b4513', marginBottom: 10 },
    subtitle: { fontSize: 16, fontStyle: 'italic', textAlign: 'center', color: '#555', marginBottom: 20 },
    card: { backgroundColor: '#fff', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#d2b48c', borderStyle: 'dashed' },
    cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#a0522d', marginBottom: 5 },
    cardText: { fontSize: 14, color: '#666' },
    footer: { textAlign: 'center', marginTop: 20, fontSize: 12, color: '#999' }
});

export default YouthMemoriesScreen;
