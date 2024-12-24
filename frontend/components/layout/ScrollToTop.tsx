"use client";

import BackToTop from './BackToTop'
import { createElement, useState } from 'react'

const ScrollToTop = () => {
	const [visible, setVisible] = useState(false)

	const onVisbile = () => {
		const scrolled = document.documentElement.scrollTop
		if (scrolled > 200) setVisible(true)
		else if (scrolled < 200) setVisible(false)
	}

	const onScroll = () => {
		if (typeof window === 'object') window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return createElement(BackToTop, {
		onScroll,
		onVisbile,
		visible
	})
}

export default ScrollToTop