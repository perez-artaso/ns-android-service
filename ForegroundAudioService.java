package com.tns;

import android.app.Service;
import android.app.NotificationManager;
import android.app.NotificationChannel;
import android.app.PendingIntent;
import android.os.Binder;
import android.os.IBinder;
import android.os.Build;
import android.content.Intent;
import android.util.Log;
import android.media.MediaPlayer;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationCompat.Builder;
import androidx.core.app.NotificationManagerCompat;
import org.nativescript.nsandroidservice.R;
import com.tns.NativeScriptActivity;
import java.lang.IllegalStateException;
import java.io.IOException;

public class ForegroundAudioService extends Service {

    private final IBinder mBinder = new LocalBinder();
    private NotificationCompat.Builder notificationBuilder;
    private int NOTIFICATION_ID;
    private String NOTIFICATION_CHANNEL_ID;
    private MediaPlayer player_instance;

    @Override
    public void onCreate() {
        NOTIFICATION_ID = 1023;
        NOTIFICATION_CHANNEL_ID = "FAS_NOTIFICATION_CHANNEL";
        create_notification_channel();
        notificationBuilder = initialize_notification_builder();
    }

    public void set_player (MediaPlayer player) {
        player_instance = player;
    }

    public void start_playing() {
        try {
            player_instance.start();  
        } catch (IllegalStateException e) {
            //This should return a value that should be used to inform
            //te calling method that the MediaPlayer must be initialized again
        }

        startForeground(NOTIFICATION_ID, notificationBuilder.build());
    
    }

    public void stop_playing() {
        if (player_instance.isPlaying()) {
            player_instance.stop();
        }
    }

    //Only executed if initializing the service through context.startService()
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        startForeground(NOTIFICATION_ID, notificationBuilder.build());
        return START_STICKY;
    }

    @Override
    public void onDestroy() {

        if (player_instance.isPlaying()) {
            player_instance.stop();
        }

        if (player_instance != null) {
            player_instance.release();
        }

    }

    @Override
    public IBinder onBind(Intent intent) {
	    return mBinder;
    }

    private NotificationCompat.Builder initialize_notification_builder() {
        Intent intent = new Intent(this, NativeScriptActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
        PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent, 0);

        return new NotificationCompat.Builder(this, NOTIFICATION_CHANNEL_ID)
        .setSmallIcon(R.drawable.icon)
        .setContentTitle("Foreground Service")
        .setContentText("Your service is being run in foreground.")
        .setPriority(NotificationCompat.PRIORITY_DEFAULT)
        .setContentIntent(pendingIntent);
    }

    private void create_notification_channel () {
        if ( Build.VERSION.SDK_INT >= Build.VERSION_CODES.O ) {
            CharSequence name = "FAS_NOTIFICATION_CHANNEL";
            String description = "Foreground Audio Service Channel";
            int importance = NotificationManager.IMPORTANCE_DEFAULT;
            NotificationChannel channel = new NotificationChannel(NOTIFICATION_CHANNEL_ID, name, importance);
            channel.setDescription(description);
            NotificationManager notificationManager = getSystemService(NotificationManager.class);
            notificationManager.createNotificationChannel(channel);
        }
    }

    private void show_notification() {
        NotificationManagerCompat notification_manager = NotificationManagerCompat.from(this);
        notification_manager.notify(NOTIFICATION_ID, notificationBuilder.build());
    }
    
    public class LocalBinder extends Binder {       
		public ForegroundAudioService getService() {
			return ForegroundAudioService.this;
		}
	}
}