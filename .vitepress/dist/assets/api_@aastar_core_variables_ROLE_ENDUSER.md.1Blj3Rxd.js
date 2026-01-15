import { _ as _export_sfc, c as createElementBlock, o as openBlock, ag as createStaticVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/core/variables/ROLE_ENDUSER.md","filePath":"api/@aastar/core/variables/ROLE_ENDUSER.md"}');
const _sfc_main = { name: "api/@aastar/core/variables/ROLE_ENDUSER.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<blockquote><p><code>const</code> <strong>ROLE_ENDUSER</strong>: <a href="https://viem.sh/docs/index.html" target="_blank" rel="noreferrer"><code>Hash</code></a></p></blockquote><p>Defined in: <a href="https://github.com/AAStarCommunity/aastar-sdk/blob/89f481b5e82d27cdc5d83f918ddad6748e0e7c3e/packages/core/src/roles.ts#L44" target="_blank" rel="noreferrer">packages/core/src/roles.ts:44</a></p><p>End User Role</p><h2 id="remarks" tabindex="-1">Remarks <a class="header-anchor" href="#remarks" aria-label="Permalink to &quot;Remarks&quot;">​</a></h2><ul><li><strong>Description</strong>: Community member, can participate and use gasless transactions</li><li><strong>Permission</strong>: Basic user level</li><li><strong>Requirement</strong>: minStake: 0.3 GT, entryBurn: 0.05 GT (line 100)</li><li><strong>Additional Requirement</strong>: Must hold MySBT from community</li><li><strong>Exit Fee</strong>: 10% (1000 basis points), min 0.05 GT</li><li><strong>Lock Duration</strong>: 7 days</li><li><strong>Source</strong>: Registry.sol line 33: ROLE_ENDUSER = keccak256(&quot;ENDUSER&quot;)</li></ul>', 5)
  ])]);
}
const ROLE_ENDUSER = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ROLE_ENDUSER as default
};
