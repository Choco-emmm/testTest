import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import authStore from '../stores/authStore';

const AuthLoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🕰️ 重返那年</Text>
            <TextInput
                style={styles.input}
                placeholder="输入你的名字..."
                value={authStore.username}
                onChangeText={authStore.setUsername}
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="输入那段秘密..."
                secureTextEntry
                value={authStore.password}
                onChangeText={authStore.setPassword}
            />
            <Button 
                title={authStore.isLoading ? '正在穿越...' : '开启回忆'} 
                onPress={authStore.login}
                disabled={authStore.isLoading || !authStore.username || authStore.password.length < 6}
                color="#cd853f"
            />
            {authStore.error ? <Text style={styles.error}>{authStore.error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fffaf0' },
    title: { fontSize: 24, marginBottom: 20, textAlign: 'center', color: '#8b4513' },
    input: { borderWidth: 1, borderColor: '#deb887', padding: 10, marginBottom: 10, borderRadius: 5, backgroundColor: '#fff' },
    error: { color: 'red', marginTop: 10, textAlign: 'center' }
});

export default AuthLoginScreen;
