"use client"

import { create } from 'zustand'

interface User {
  id: string
  email: string
  name: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => void
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  signIn: async (email: string, password: string) => {
    set({ isLoading: true })
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // In a real app, you would validate credentials with your backend
      if (email === "demo@example.com" && password === "password") {
        const user = { id: "1", email, name: "Demo User" }
        set({ user, isAuthenticated: true })
      } else {
        throw new Error("Invalid credentials")
      }
    } finally {
      set({ isLoading: false })
    }
  },
  signOut: () => {
    set({ user: null, isAuthenticated: false })
  }
}))

