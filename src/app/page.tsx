import React from 'react'
import AuthorCard from '@/components/AuthorCard'
import Blog from '@/components/Blog'
import Comment from '@/components/Comment'
import Intro from '@/components/Intro'
import Feature from '@/components/Feature'

export default function Home() {
  return (
    <div className="bg-slate-900">
      <Intro/>
      <Feature/>
      <Blog/>
      <AuthorCard/>
      <Comment/>
    </div>
  )
}
