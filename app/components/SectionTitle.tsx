import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => (
  <Text style={styles.title}>{title}</Text>
);

type SectionTitleStyleSheet = {
  title: TextStyle;
};

const styles = StyleSheet.create<SectionTitleStyleSheet>({
  title: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '600'
  }
});

export default SectionTitle;
