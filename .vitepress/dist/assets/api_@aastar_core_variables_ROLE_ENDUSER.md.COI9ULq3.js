import { _ as _export_sfc, c as createElementBlock, o as openBlock, ag as createStaticVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/core/variables/ROLE_ENDUSER.md","filePath":"api/@aastar/core/variables/ROLE_ENDUSER.md","lastUpdated":1769237380000}');
const _sfc_main = { name: "api/@aastar/core/variables/ROLE_ENDUSER.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<blockquote><p><code>const</code> <strong>ROLE_ENDUSER</strong>: <a href="https://viem.sh/docs/index.html" target="_blank" rel="noreferrer"><code>Hash</code></a></p></blockquote><p>Defined in: <a href="https://github.com/AAStarCommunity/aastar-sdk/blob/6388ef6d7c1f0b08255a8800bb272255cd49bb47/packages/core/src/roles.ts#L39" target="_blank" rel="noreferrer">packages/core/src/roles.ts:39</a></p><p>End User Role</p><h2 id="description" tabindex="-1">Description <a class="header-anchor" href="#description" aria-label="Permalink to &quot;Description&quot;">​</a></h2><p>Community member, can participate and use gasless transactions</p><h2 id="permission" tabindex="-1">Permission <a class="header-anchor" href="#permission" aria-label="Permalink to &quot;Permission&quot;">​</a></h2><p>Basic user level</p><h2 id="requirement" tabindex="-1">Requirement <a class="header-anchor" href="#requirement" aria-label="Permalink to &quot;Requirement&quot;">​</a></h2><p>minStake: 0.3 GT, entryBurn: 0.05 GT (line 100)</p><h2 id="additional-requirement" tabindex="-1">Additional Requirement <a class="header-anchor" href="#additional-requirement" aria-label="Permalink to &quot;Additional Requirement&quot;">​</a></h2><p>Must hold MySBT from community</p><h2 id="exit-fee" tabindex="-1">Exit Fee <a class="header-anchor" href="#exit-fee" aria-label="Permalink to &quot;Exit Fee&quot;">​</a></h2><p>10% (1000 basis points), min 0.05 GT</p><h2 id="lock-duration" tabindex="-1">Lock Duration <a class="header-anchor" href="#lock-duration" aria-label="Permalink to &quot;Lock Duration&quot;">​</a></h2><p>7 days</p><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p>Registry.sol line 33: ROLE_ENDUSER = keccak256(&quot;ENDUSER&quot;)</p>', 17)
  ])]);
}
const ROLE_ENDUSER = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ROLE_ENDUSER as default
};
