'use client'

import React from "react";
import ReactMarkdown from "react-markdown";

export default async function BeautifyMarkdown({
  markdown
}: { markdown: string }) {
  return (
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    )
}