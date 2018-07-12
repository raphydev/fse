<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180712130326 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE former (id INT AUTO_INCREMENT NOT NULL, training_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, slug VARCHAR(255) DEFAULT NULL, content LONGTEXT DEFAULT NULL, INDEX IDX_53B512EEBEFD98D1 (training_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE item (id INT AUTO_INCREMENT NOT NULL, former_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, slug VARCHAR(255) DEFAULT NULL, time TIME DEFAULT NULL, INDEX IDX_1F1B251E6C20F19 (former_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE training (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, slug VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE former ADD CONSTRAINT FK_53B512EEBEFD98D1 FOREIGN KEY (training_id) REFERENCES training (id)');
        $this->addSql('ALTER TABLE item ADD CONSTRAINT FK_1F1B251E6C20F19 FOREIGN KEY (former_id) REFERENCES former (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE item DROP FOREIGN KEY FK_1F1B251E6C20F19');
        $this->addSql('ALTER TABLE former DROP FOREIGN KEY FK_53B512EEBEFD98D1');
        $this->addSql('DROP TABLE former');
        $this->addSql('DROP TABLE item');
        $this->addSql('DROP TABLE training');
    }
}
