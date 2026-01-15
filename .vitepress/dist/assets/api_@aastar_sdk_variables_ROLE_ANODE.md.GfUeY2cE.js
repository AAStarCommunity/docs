import { _ as _export_sfc, c as createElementBlock, o as openBlock, ag as createStaticVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/sdk/variables/ROLE_ANODE.md","filePath":"api/@aastar/sdk/variables/ROLE_ANODE.md"}');
const _sfc_main = { name: "api/@aastar/sdk/variables/ROLE_ANODE.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ROLE_ANODE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Hash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Defined in: <a href="https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/core/src/roles.ts#L93" target="_blank" rel="noreferrer">packages/core/src/roles.ts:93</a></p><p>ANODE Role (Anonymous Node)</p><h2 id="remarks" tabindex="-1">Remarks <a class="header-anchor" href="#remarks" aria-label="Permalink to &quot;Remarks&quot;">​</a></h2><ul><li><strong>Description</strong>: Anonymous infrastructure node operator</li><li><strong>Permission</strong>: Infrastructure operator</li><li><strong>Requirement</strong>: minStake: 20 GT, entryBurn: 2 GT (line 95)</li><li><strong>Exit Fee</strong>: 10% (1000 basis points), min 1 GT</li><li><strong>Lock Duration</strong>: 30 days</li><li><strong>Source</strong>: Registry.sol line 37: ROLE_ANODE = keccak256(&quot;ANODE&quot;)</li></ul>', 5)
  ])]);
}
const ROLE_ANODE = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ROLE_ANODE as default
};
