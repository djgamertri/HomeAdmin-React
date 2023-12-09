import React, { useState, useEffect } from 'react'
import Markdoc from '@markdoc/markdoc'
import axios from 'axios'
import Callout from '../Callout/Callout'
import Block from '../Bloc/Block'

const MarkdownRenderer = ({ source }) => {
  const tags = {
    callout: {
      render: 'Callout'
    },
    block: {
      render: 'Block'
    }
  }
  const [markdownContent, setMarkdownContent] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(source)
        setMarkdownContent(response.data)
      } catch (error) {
        console.error('Error fetching Markdown content:', error)
      }
    }

    fetchData()
  }, [source])
  const ast = Markdoc.parse(markdownContent)
  const error = Markdoc.validate(ast, { tags })
  console.log(error)
  const content = Markdoc.transform(ast, { tags })

  return Markdoc.renderers.react(content, React, {
    components: {
      Callout,
      Block
    }
  })
}

export default MarkdownRenderer
