/* AUTO-GENERATED FILE. DO NOT MODIFY.
 * This class was automatically generated by the
 * static binding generator from the resources it found.
 * Please do not modify by hand.
 */
package com.tns.gen.android.media;

public class AudioManager_OnAudioFocusChangeListener extends java.lang.Object
    implements com.tns.NativeScriptHashCodeProvider,
        android.media.AudioManager.OnAudioFocusChangeListener {
  public AudioManager_OnAudioFocusChangeListener() {
    super();
    com.tns.Runtime.initInstance(this);
  }

  public void onAudioFocusChange(int param_0) {
    java.lang.Object[] args = new java.lang.Object[1];
    args[0] = param_0;
    com.tns.Runtime.callJSMethod(this, "onAudioFocusChange", void.class, args);
  }

  public int hashCode__super() {
    return super.hashCode();
  }

  public boolean equals__super(java.lang.Object other) {
    return super.equals(other);
  }
}
