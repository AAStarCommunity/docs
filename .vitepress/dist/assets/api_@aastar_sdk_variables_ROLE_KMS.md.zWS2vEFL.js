import { _ as _export_sfc, c as createElementBlock, o as openBlock, ag as createStaticVNode } from "./chunks/framework.vWx6JuJ5.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"api/@aastar/sdk/variables/ROLE_KMS.md","filePath":"api/@aastar/sdk/variables/ROLE_KMS.md"}');
const _sfc_main = { name: "api/@aastar/sdk/variables/ROLE_KMS.md" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [..._cache[0] || (_cache[0] = [
    createStaticVNode('<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ROLE_KMS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Hash</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Defined in: <a href="https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/core/src/roles.ts#L105" target="_blank" rel="noreferrer">packages/core/src/roles.ts:105</a></p><p>KMS Role (Key Management Service)</p><h2 id="remarks" tabindex="-1">Remarks <a class="header-anchor" href="#remarks" aria-label="Permalink to &quot;Remarks&quot;">​</a></h2><ul><li><strong>Description</strong>: KMS operator for secure key storage and management</li><li><strong>Permission</strong>: Infrastructure operator (highest stake)</li><li><strong>Requirement</strong>: minStake: 100 GT, entryBurn: 10 GT (line 98)</li><li><strong>Exit Fee</strong>: 10% (1000 basis points), min 5 GT</li><li><strong>Lock Duration</strong>: 30 days</li><li><strong>Source</strong>: Registry.sol line 38: ROLE_KMS = keccak256(&quot;KMS&quot;)</li></ul>', 5)
  ])]);
}
const ROLE_KMS = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  ROLE_KMS as default
};
