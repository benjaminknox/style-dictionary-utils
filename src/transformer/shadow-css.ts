import type { ValueTransform } from 'style-dictionary/types'
import { isShadow } from '../filter/isShadow.js'

type TokenShadow = {
  color: string
  offsetX: string
  offsetY: string
  blur: string
  spread: string
}

const formatShadow = ({
  offsetX = '0',
  offsetY = '0',
  blur = '0',
  spread = '0',
  color,
}: TokenShadow ): string => `${offsetX} ${offsetY} ${blur} ${spread} ${color}`;

export const shadowCss: Omit<ValueTransform, 'name'> = {
  type: `value`,
  transitive: true,
  matcher: isShadow,
  transformer: ({ value }) => {
    if (Array.isArray(value)) {
      return value.map(formatShadow).join(", ");
    }

    if (typeof value === "object") {
      return formatShadow(value);
    }

    return value;
  },
}
