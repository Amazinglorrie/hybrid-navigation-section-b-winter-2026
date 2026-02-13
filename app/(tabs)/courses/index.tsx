import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import AppCard from "../../../components/app-card"
import { theme } from '@/styles/theme'
import React from 'react'


const COURSES = [
    {id: "CPRG216", title:"CPRG-216", subtitle: "Object Oriented Programming"},
    {id: "CPRG303", title:"CPRG-303", subtitle: "Advance Web Systems"},
    {id: "CPRG303", title:"CPRG-303", subtitle: "Mobile Development"}
]
const CoursesList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Your Courses</Text>
      <FlatList 
      data={COURSES}
      keyExtractor={(item)=> item.id}
      renderItem={({item})=>(
        <Pressable onPress={() => router.push(`/(tabs)/courses/${item.id}`)}>
            <AppCard 
            title={item.title}
            subtitle={item.subtitle}
            right={
                <Ionicons 
                 name="chevron-forward"
                  size={20}
                  color={theme.colors.muted}

                />
            }
            />
        </Pressable>
      )}
      />
    </View>
  )
}

export default CoursesList

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: theme.spacing.screen,
        backgroundColor: theme.colors.bg,
    },
    h1:{
        fontSize: 22,
        fontWeight: "800",
        margin: 12,
        color: theme.colors.text
    }
})