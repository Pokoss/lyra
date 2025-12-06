from pathlib import Path
s = Path('resources/js/Pages/Products/ProductDetails.jsx').read_text(encoding='utf-8')
# simple checks for brackets
pairs = {'(':')','{':'}','[':']'}
stack=[]
for i,ch in enumerate(s):
    if ch in pairs:
        stack.append((ch,i+1))
    elif ch in pairs.values():
        if not stack:
            print('unmatched closing', ch, 'at', i+1)
            break
        open_ch, pos = stack.pop()
        if pairs[open_ch]!=ch:
            print('mismatch', open_ch, 'at', pos, 'vs', ch, 'at', i+1)
            break
else:
    if stack:
        print('unclosed', stack[-1][0], 'at', stack[-1][1])
    else:
        print('all (),{},[] balanced')
