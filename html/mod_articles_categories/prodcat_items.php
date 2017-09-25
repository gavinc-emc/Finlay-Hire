<?php
/**
 * @package     Joomla.Site
 * @subpackage  mod_articles_categories
 *
 * @copyright   Copyright (C) 2005 - 2017 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

foreach ($list as $item) :
    ?>
    <li>
        <div class="news-image">
            <a href="<?php echo JRoute::_(ContentHelperRoute::getCategoryRoute($item->id)); ?>">
                <img src="<?php echo json_decode($item->params)->image ?>" alt="<?php echo json_decode($item->params)->image_alt ?>" />
            </a>
        </div>
        <div class="news-overlay">
            <div class="product-title">
            <h<?php echo $params->get('item_heading') + $levelup; ?>>
            <a href="<?php echo JRoute::_(ContentHelperRoute::getCategoryRoute($item->id)); ?>">
            <?php echo $item->title; ?>
            </a>
            </h<?php echo $params->get('item_heading') + $levelup; ?>>
            </div>
            <?php
            $categoryDescription = JHtml::_('content.prepare', $item->description, $item->getParams(), 'mod_articles_categories.content');
            // remove intro p
            $categoryDescription = preg_replace('/<p class="intro"[^>]*>([\s\S]*?)<\/p[^>]*>/', '', $categoryDescription);
            // remove header
            $categoryDescription = preg_replace('/<h[^>]*>([\s\S]*?)<\/h[^>]*>/', '', $categoryDescription);
            echo $categoryDescription; ?>
            <div class="buttonwrap">
                <span>
                    <a href="<?php echo JRoute::_(ContentHelperRoute::getCategoryRoute($item->id)); ?>">View products</a>
                </span>
            </div>
        </div>
    </li>
<?php endforeach; ?>
