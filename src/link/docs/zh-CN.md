## 链接

### 基本使用

```vue
import BasicUse from '../example/BasicUse.vue'
```

```html
<div>
  <luckly-link type="primary">主要链接</luckly-link>
  <luckly-link type="success">成功链接</luckly-link>
  <luckly-link type="warning">警告链接</luckly-link>
  <luckly-link type="danger">危险链接</luckly-link>
  <luckly-link type="info">信息链接</luckly-link>
</div>
```
### 禁用链接

```vue
import Banlink from '../example/BanLink.vue'
```

```html
<div>
  <luckly-link type="primary" disabled>主要链接</luckly-link>
  <luckly-link type="success" disabled>成功链接</luckly-link>
  <luckly-link type="warning" disabled>警告链接</luckly-link>
  <luckly-link type="danger" disabled>危险链接</luckly-link>
  <luckly-link type="info" disabled>信息链接</luckly-link>
</div>
```

## API

### 属性

| 参数    | 说明     | 类型     | 默认值    |
| ------- | -------- | -------- | --------- |
| `type` | 字体颜色 | _string_ | `primary` |
| `disabled` | 是否禁用 | _boolean_ | `false` |

### 事件

| 事件名  | 说明           | 参数           |
| ------- | -------------- | -------------- |
| `click` | 点击按钮时触发 | `event: Event` |

### 插槽

| 插槽名    | 说明     | 参数 |
| --------- | -------- | ---- |
| `default` | 按钮内容 | `-`  |
