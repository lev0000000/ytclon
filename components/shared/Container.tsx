import { cn } from 'cn'
import React from 'react'
import type { Component } from '@/app/models/types'

export default function Container({className, children}: Component ) {
  return (
    <div className={cn('mx-auto max-w-[1440px]', className)}>{children}</div>
  )
}