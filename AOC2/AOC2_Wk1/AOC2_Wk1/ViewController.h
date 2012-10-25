//
//  ViewController.h
//  AOC2_Wk1
//
//  Created by Brandon Sease on 9/26/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "customCarFactory.h"

@interface ViewController : UIViewController <UIScrollViewDelegate>
{
    IBOutlet UIScrollView *scrollview;
    UILabel *tintConfirm;
    UILabel *tintDetails;
    UILabel *tintCost;
    UILabel *rimsConfirm;
    UILabel *rimsDetails;
    UILabel *rimsCost;
    UILabel *stereoConfirm;
    UILabel *stereoDetails;
    UILabel *stereoCost;

    
}


@end
